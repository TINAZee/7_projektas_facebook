
function renderHeader(data,time) {
    
return ` <header class="post-header">
        <img class="avatar" src="./img/users/${data.photo}" alt="User profile"></img>
        <div class ="author">
            <a class="user-link" href="#">${data.name} ${data.lastname}</a>
            <div class="timestamp">6h ago ${time}</div>
        </div>
        <i class="fa fa-ellipsis-h"></i>
    </header>`;
}

export default renderHeader;