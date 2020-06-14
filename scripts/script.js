function UploadSound()
{
    var input = document.createElement('input');
    input.type = 'file';
    input.accept="audio/*";
    input.onchange = e => 
    {
        let uploadedFile = e.target.files[0];
        
        if(uploadedFile.size > 5000000)
        {
            alert("Max file size is 5MB");
        }
        else
        {
            UploadFileToServer(file);
        }
    }
    input.click();
}

function UploadFileToServer()
{

}

function OnLoad()
{
    DisplayPosts();
}

function DisplayPosts()
{
    const Posts = GetPosts();
    const postsContainer = document.getElementById('posts');
    Posts.forEach(post => AddPostToPostsContainer(postsContainer, post));
}

function AddPostToPostsContainer(container, item)
{
    let post = document.createElement("div");

    //add description
    let description = document.createElement("p");
    description.innerText = item.description;
    post.appendChild(description);

    //add audio
    let audio = document.createElement("audio");
    audio.setAttribute("controls", "");
    audio.innerText += "controls";
    let source = document.createElement("source");
    source.src = item.audioPath;
    audio.appendChild(source);
    post.appendChild(audio);

    //add image
    let image = document.createElement("image");
    image.setAttribute("src", item.imagePath);
    post.appendChild(image);

    container.appendChild(post);
}

function GetUploads()
{

}
