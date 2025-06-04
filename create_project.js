document.getElementById('createProjectForm').onsubmit = function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const dropzoneFiles = Dropzone.forElement("#dropzone").files;

    if (dropzoneFiles.length > 0) {
        formData.append('organizationPhoto', dropzoneFiles[0]);
    } else {
        alert('請提供提案單位照片');
        return;
    }

    
    window.location.href = 'project_details.html';
};


Dropzone.autoDiscover = false;
const dropzone = new Dropzone("#dropzone", {
    url: "#",
    autoProcessQueue: false,
    maxFiles: 1,
    acceptedFiles: 'image/*',
    dictDefaultMessage: 'Drag & drop files here or click to upload',
    addRemoveLinks: true
});
