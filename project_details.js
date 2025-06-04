document.addEventListener("DOMContentLoaded", function() {
   
    const projectData = JSON.parse(sessionStorage.getItem('createProjectData'));
    if (projectData) {
        console.log('Project data loaded:', projectData);
       
    }
});

document.getElementById('projectDetailsForm').onsubmit = function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('projectName', document.getElementById('projectName').value);
    formData.append('projectDescription', document.getElementById('projectDescription').value);
    formData.append('goalAmount', document.getElementById('goalAmount').value);
    formData.append('startDate', document.getElementById('startDate').value);
    formData.append('taxReceipt', document.getElementById('taxReceipt').value);

    const projectData = JSON.parse(sessionStorage.getItem('createProjectData'));
    for (const [key, value] of Object.entries(projectData)) {
        formData.append(key, value);
    }

    
    alert('專案詳情提交成功！');
    
    sessionStorage.removeItem('createProjectData');
};