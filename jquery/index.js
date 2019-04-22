// global variables ---------------------------------------------------------------------
var localStorage = window.localStorage;
var data = {};
var counter = 0;

// HTML tag constructors ----------------------------------------------------------------
function divTag (cls, id, html="") {
    return $("<div>").attr({
        "class" : cls,
        "id" : id,
    }).html(html);
}
function inputTag (cls, id, placeholder, value, html="") {
    return $("<input>").attr({
        "class" : cls,
        "id" : id,
        "type" : "text",
        "placeholder" : placeholder,
        "value" : value
    }).html(html);
}
function buttonTag (cls, id, value, onclick, html="") {
    return $("<input>").attr({
        "class" : cls,
        "id" : id,
        "type" : "button",
        "value" : value,
        "onclick" : onclick
    }).html(html);
}
function pTag (html="") {
    return $("<p>").attr("class", "show").html(html);
}

// data traversal DOM constructors ------------------------------------------------------
function domPost (domId, post) {
    $(domId)
    .append(divTag("postAuthor", undefined, "author | " + data.users.find(u => u.id == post.userId).name))
    .append(divTag("postTitle", undefined, post.title))
    .append(divTag("postBody", undefined, post.body))
    .append(divTag("postBtn", undefined))
    .append(divTag("commentThread", undefined).css("display", "none"));
    $(domId + ">.postBtn")
    .append(buttonTag("postLike", undefined, post.liked ? "❤ Liked" : "Like", "likePost(" + post.id + ")"))
    .append(buttonTag("postEdit", undefined, "Edit", "editPost(" + post.id + ")"))
    .append(buttonTag("postDelete", undefined, "Delete", "deletePost(" + post.id + ")"))
    .append(buttonTag("createNewComment", undefined, "Add a New Comment", "createNewComment(" + post.id + ")"))
    .append(buttonTag("displayCommentThread", undefined, "Show Comments", "displayCommentThread(" + post.id + ")"));
}
function domComment (domId, comment) {
    $(domId)
    .append($("<hr>"))
    .append(divTag("commentAuthor", undefined, "by | " + comment.name))
    .append(divTag("commentEmail", undefined, comment.email))
    .append(divTag("commentBody", undefined, comment.body))
    .append(divTag("commentBtn", undefined));
    $(domId + ">.commentBtn")
    .append(buttonTag("commentLike", undefined, comment.liked ? "❤ Liked" : "Like", "likeComment(" + comment.id + ")"))
    .append(buttonTag("commentDelete", undefined, "Delete", "deleteComment(" + comment.id + ")"));
}
function domEditPost (domId, postId) {
    let uId = data.posts.find(p => p.id == postId).userId;
    $(domId).append(divTag("postWindow", "postWindow"));
    $(domId + ">.postWindow")
    .append(pTag("Author: ")).append(inputTag("newAuthor", undefined, "Your Name", data.users.find(u => u.id == uId).name).attr("readonly", "readonly"))
    .append(pTag("Email: ")).append(inputTag("newEmail", undefined, "Your Email", data.users.find(u => u.id == uId).email).attr("readonly", "readonly")).append("<br \>")
    .append(pTag("Title: ")).append(inputTag("newTitle", undefined, "Add a Title", data.posts.find(p => p.id == postId).title)).append("<br \>")
    .append(pTag("Content: ")).append(inputTag("newBody", undefined, "Add Some Content", data.posts.find(p => p.id == postId).body)).append("<br \>")
    .append(buttonTag("submitNew", undefined, "Submit", "submitEditPost(" + postId + ")"));
}
function domCreateNewPost (domId) {
    $(domId).prepend(divTag("postWindow", "postWindow"));
    $(domId + ">.postWindow")
    .append(pTag("Author: ")).append(inputTag("newAuthor", undefined, "Your Name", ""))
    .append(pTag("Email: ")).append(inputTag("newEmail", undefined, "Your Email", "")).append("<br \>")
    .append(pTag("Title: ")).append(inputTag("newTitle", undefined, "Add a Title", "")).append("<br \>")
    .append(pTag("Content: ")).append(inputTag("newBody", undefined, "Add Your Post", "")).append("<br \>")
    .append(buttonTag("submitNew", undefined, "Submit", "submitNewPost()"));
}
function domCreateNewComment (domId, postId) {
    $(domId)
    // .append($("<hr>"))
    .append(divTag("commentWindow", undefined));
    $(domId + ">.commentWindow")
    .append(pTag("Name: ")).append(inputTag("newCommenterName", undefined, "Your Name", ""))
    .append(pTag("Email: ")).append(inputTag("newCommenterEmail", undefined, "Your Email", "")).append("<br \>")
    .append(pTag("Content: ")).append(inputTag("newCommenterBody", undefined, "Add Your Comment", "")).append("<br \>")
    .append(buttonTag("submitNew", undefined, "Submit", "submitNewComment(" + postId + ")"));
}
// required functionalities -------------------------------------------------------------
function likeComment (commentId) {
    let c = data.comments.find(c => c.id == commentId);
    // update data
    c.liked = c.liked ? false : true;
    saveData (data);
    // update DOM
    $("#commentid_" + commentId + ">.commentBtn >.commentLike").val(c.liked ? "❤ Liked" : "Like");
}
function deleteComment (commentId) {
    // update data
    data.comments.find(c => c.id == commentId).deleted = true;
    saveData (data);
    // update DOM
    $("#commentid_" + commentId).remove();
}
function createNewComment (postId) {
    // update DOM
    let commentThread = $("#postid_" + postId + ">.commentThread");
    let commentBtn = $("#postid_" + postId + ">.postBtn >.displayCommentThread");
    let createNewCommentBtn = $("#postid_" + postId + ">.postBtn >.createNewComment");
    if (commentBtn.val() == "Show Comments") {
        commentBtn.val("Hide Comments");
        commentThread.toggle();
        // createNewCommentBtn.attr("disabled", true);
    }
}
function displayCommentThread (postId) {
    // update DOM
    let commentThread = $("#postid_" + postId + ">.commentThread");
    let commentBtn = $("#postid_" + postId + ">.postBtn >.displayCommentThread");
    let createNewCommentBtn = $("#postid_" + postId + ">.postBtn >.createNewComment");
    if (commentBtn.val() == "Show Comments") {
        commentBtn.val("Hide Comments");
        commentThread.toggle();
    } else {
        commentBtn.val("Show Comments");
        createNewCommentBtn.attr("disabled", false);
        commentThread.toggle();
    }
}
function createNewPost (postId) {
    // update DOM
    let postWindowOpen = $("#all-post >.postWindow").length ? true : false;
    $(".postWindow").remove();
    $(".postEdit").val("Edit");
    $(".createNewPost").val("createNewPost");

    if (!postWindowOpen) {
        domCreateNewPost ("#all-post");
        $("#createNewPost").val("Hide newPostWindow");
    } else {
        $("#createNewPost").val("createNewPost");
        $(".postWindow").remove();
    }
}
function likePost (postId) {
    let p = data.posts.find(p => p.id == postId);
    // update data
    p.liked = p.liked ? false : true;
    saveData (data);
    // update DOM
    $("#postid_" + postId + ">.postBtn >.postLike").val(p.liked ? "❤ Liked" : "Like");
}
function deletePost (postId) {
    // update data
    data.posts.find(p => p.id == postId).deleted = true;
    saveData (data);
    // update DOM
    $("#postid_" + postId).remove();
}
function editPost (postId) {
    // update DOM
    let postWindowBtn = $("#postid_" + postId + ">.postBtn >.postEdit");
    let postWindowOpen = $("#postid_" + postId + ">.postBtn" + ">.postWindow").length ? true : false;
    $(".postWindow").remove();
    $(".postEdit").val("Edit");
    $(".createNewPost").val("createNewPost");

    if (!postWindowOpen) {
        domEditPost ("#postid_" + postId + ">.postBtn", postId);
        postWindowBtn.val("Hide Edit");
    } else {
        postWindowBtn.val("Edit");
        $(".postWindow").remove();
    }
}
function submitEditPost (postId) {
    // update data
    let editPostDetails = [];
    let domId = "#postid_" + postId + ">.postWindow";
    $(domId + ">.submitNew").siblings("input").each(function () {editPostDetails.push(this.value)});
    let [username, email, title, body] = editPostDetails;
    let userId = data.users.find(u => u.name == username) ? data.users.find(u => u.name == username).id : data.users.length + 1;
    data.posts.find(p => p.id == postId).title = title;
    data.posts.find(p => p.id == postId).body = body;
    data.posts.find(p => p.id == postId).edited = true;
    saveData (data);
    
    // update DOM
    $("#postid_" + postId + ">.postBtn >.postEdit").val("Edit");
    $("#postid_" + postId + ">.postWindow").remove();
    $("#postid_" + postId + ">.postTitle").html(title);
    $("#postid_" + postId + ">.postBody").html(body);
}
function submitNewPost () {
    // update data
    let editPostDetails = [];
    let domId = "#all-post" + ">.postWindow";
    $(domId + ">.submitNew").siblings("input").each(function () {editPostDetails.push(this.value)});
    let [fullName, email, title, body] = editPostDetails;
    let userId = data.users.find(u => u.name == fullName) ? data.users.find(u => u.name == fullName).id : data.users.slice(-1)[0].id + 1;
    let postId = data.posts.slice(-1)[0].id + 1;
    let newPost = {
        userId : userId,
        id : postId,
        title : title,
        body : body
    }
    let newUser = {
        id : userId,
        name : fullName,
        username: fullName.split(" ").join("."),
        email : email
    }
    data.posts.push(newPost);
    if (data.users.find(u => u.name == fullName) == undefined) {
        data.users.push(newUser);
    }
    saveData (data);
    
    // update DOM
    $("#createNewPost").val("createNewPost");
    $("#all-post" + ">.postWindow").remove();
    $("#all-post").append(divTag("post", "postid_" + postId));
    domPost("#postid_" + postId, newPost);
}
function submitNewComment (postId) {
    // update data
    let newCommentDetails = [];
    let domId = "#postid_" + postId + ">.commentThread >.commentWindow";
    $(domId + ">.submitNew").siblings("input").each(function () {newCommentDetails.push(this.value)});
    let [fullName, email, body] = newCommentDetails;
    let commentId = data.comments.slice(-1)[0].id + 1;
    let newComment = {
        postId : postId,
        id : commentId,
        name : fullName,
        email : email,
        body : body
    }
    data.comments.push(newComment);
    saveData (data);
    
    // update DOM
    let createNewCommentBtn = $("#postid_" + postId + ">.postBtn >.createNewComment");
    createNewCommentBtn.attr("disabled", false);
    $(domId + ">.submitNew").siblings("input").each(function () {$(this).val("")});
    (divTag("postid_" + postId + "_comment", "commentid_" + commentId)).insertBefore($("#postid_" + postId + ">.commentThread >.commentWindow"))
    domComment("#commentid_" + commentId, newComment);
}
33333
// update localStorage ------------------------------------------------------------------
function saveData (data) {
    localStorage.setItem("data", JSON.stringify(data));
}
function getData () {
    var data = JSON.parse(localStorage.getItem("data"));
    data.posts = data.posts.filter(p => !p.deleted);
    data.comments = data.comments.filter(c => !c.deleted);
    return data;
}

// call for data ------------------------------------------------------------------------
function callData (category){
    return new Promise(function(resolve, reject) {
        // api call
        jQuery.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/" + category,
            success: item => {
                // console.log("find <" + category + "> success");
                resolve([category, item]);
            },
            error: error => {
                console.log("find <" + category + "> error");
                reject(error);
            }
        });
    });
}
function promiseAll () {
    Promise.all([callData("posts"), callData("comments"), callData("users")]).then((dict) => {
        var data = {};
        dict.forEach(d => {
            data[d[0]] = d[1];
            // console.log("post <" + d[0] + "> success");
        });
        saveData (data);
        console.log("save all to <data> success");
    })
    .catch((err) => {
        console.log("err: " + err);
    });
}

// main ---------------------------------------------------------------------------------
function main (n) {
    if (!localStorage.getItem("data")) {
        promiseAll();
        console.log(promiseAll());
        // let resu = await promiseAll();
        // resu((res,rej) => {
        //     console.log(resolve());
    }
    data = getData();
    // posts data traversal
    data.posts.filter(p => !p.deleted).slice(counter, counter + n).forEach(p => {
        counter += 1;
        $("#all-post").append(divTag("post", "postid_" + p.id));
        domPost("#postid_" + p.id, p);
        // comments data traversal
        data.comments.filter(c => !c.deleted).filter(c => c.postId == p.id).forEach(c => {
            $("#postid_" + p.id + ">.commentThread").append(divTag("postid_" + p.id + "_comment", "commentid_" + c.id));
            domComment("#commentid_" + c.id, c);
        });
        domCreateNewComment("#postid_" + p.id + ">.commentThread", p.id);
    });

    addNav();
}

main(20);
$(window).scroll(function() {
    if ($(document).scrollTop() + window.innerHeight >= $(document).innerHeight()) {
        // console.log("a");
        main(20);
    }
});

// auxiliary functionalities ------------------------------------------------------------
function reloadData() {
    localStorage.clear();
    promiseAll();
}

function addNav() {
    $("#main-nav")
    .append(buttonTag("createNewPost", "createNewPost", "createNewPost", "createNewPost(" + (data.posts.slice(-1)[0].id + 1) + ")"))
    .append(buttonTag("reloadData", "reloadData", "reloadData", "reloadData()"));
}

