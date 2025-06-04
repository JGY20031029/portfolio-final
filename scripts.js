// 打開捐款模態窗口
function donate() {
    document.getElementById('donationModal').style.display = 'block';
}

// 關閉捐款模態窗口
function closeDonationModal() {
    document.getElementById('donationModal').style.display = 'none';
}

// 當點擊模態窗口外部時關閉模態窗口
window.onclick = function(event) {
    let modal = document.getElementById('donationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 處理表單提交事件
document.getElementById('donationForm').onsubmit = function(event) {
    event.preventDefault();
    let campaignSelect = document.getElementById('campaignSelect').value;
    let donationAmount = parseInt(document.getElementById('donationAmount').value);
    let campaign = document.querySelector(`.campaign[data-name="${campaignSelect}"]`);
    let currentRaised = parseInt(campaign.getAttribute('data-raised'));
    let newRaised = currentRaised + donationAmount;
    campaign.setAttribute('data-raised', newRaised);
    updateProgressBars();
    updateRaisedAmounts();
    alert(`感謝您捐款NT$${donationAmount}給${campaignSelect}！`);
    closeDonationModal();
}

// 更新進度條和已籌金額
function updateProgressBars() {
    const campaigns = document.querySelectorAll('.campaign');
    campaigns.forEach(campaign => {
        const goal = parseInt(campaign.getAttribute('data-goal'));
        const raised = parseInt(campaign.getAttribute('data-raised'));
        const progress = campaign.querySelector('.progress');
        const percentage = (raised / goal) * 100;
        progress.style.width = percentage + '%';
    });
}

function updateRaisedAmounts() {
    const campaigns = document.querySelectorAll('.campaign');
    campaigns.forEach(campaign => {
        const raised = parseInt(campaign.getAttribute('data-raised'));
        const raisedElement = campaign.querySelector('.raised-amount');
        raisedElement.textContent = `NT$${raised.toLocaleString()}`;
    });
}

// 搜尋功能
function filterCampaigns() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const campaigns = document.querySelectorAll('.campaign');

    campaigns.forEach(campaign => {
        const keywords = campaign.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(filter)) {
            campaign.style.display = "";
        } else {
            campaign.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    updateProgressBars();
    updateRaisedAmounts();
});



