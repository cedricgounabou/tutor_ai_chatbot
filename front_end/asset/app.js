// start: Sidebar
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        document.querySelector('.chat-sidebar-profile').classList.remove('active')
    }
})
// end: Sidebar



// start: Conversation
document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        if(this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active')
        } else {
            document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                i.classList.remove('active')
            })
            this.parentElement.classList.add('active')
        }
    })
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
            i.classList.remove('active')
        })
    }
})

document.querySelectorAll('.conversation-form-input').forEach(function(item) {
    item.addEventListener('input', function() {
        this.rows = this.value.split('\n').length
    })
})

document.querySelectorAll('[data-conversation]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active')
        })
        document.querySelector(this.dataset.conversation).classList.add('active')
    })
})

document.querySelectorAll('.conversation-header-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversation').classList.remove('active')
        document.querySelector('.conversation-default').classList.add('active')
    })
})
// end: Conversation



//links chat-sidebar-menu
document.querySelectorAll('.chat-sidebar-menu-links').forEach(function(item){
    item.addEventListener("click", () => {
        console.log(item)
    })
})