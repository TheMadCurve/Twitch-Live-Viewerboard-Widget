// Twitch API credentials (Replace with your actual credentials)
const CLIENT_ID = juncj2stlhtm3cod0r056rmb0i3la5;
const CHANNEL_ID = madc134; // Your Twitch Channel ID
const AUTH_TOKEN = mmzgiltw59w95us34fivvjrx323glu;

// Function to fetch viewers from Twitch API
async function fetchViewers() {
    try {
        const response = await fetch(`https://api.twitch.tv/helix/chat/chatters?broadcaster_id=${CHANNEL_ID}&moderator_id=${CHANNEL_ID}`, {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": `Bearer ${AUTH_TOKEN}`
            }
        });
        
        if (!response.ok) throw new Error("Failed to fetch viewers");
        
        const data = await response.json();
        const chatters = data.data;
        
        viewers = chatters.map(user => ({
            profilePic: `https://static-cdn.jtvnw.net/jtv_user_pictures/${user.user_id}-profile_image-70x70.png`,
            username: user.user_name,
            role: user.user_type || "Viewer",
            followAge: followAge
        }));
        
        updateViewerList();
    } catch (error) {
        console.error("Error fetching viewers:", error);
    }
}

// Function to update the viewer list dynamically
function updateViewerList() {
    const viewerList = document.getElementById("viewers");
    viewerList.innerHTML = ""; // Clear existing list

    viewers.forEach(viewer => {
        const listItem = document.createElement("li");
        listItem.classList.add("viewer");
        listItem.setAttribute("data-username", viewer.username); // Store username for easy lookup

        listItem.innerHTML = `
            <img src="${viewer.profilePic}" alt="${viewer.username}" class="profile-pic">
            <div class="viewer-info">
                <span class="userName">${viewer.username}</span>
                <span class="role">${viewer.role}</span>
                <span class="follow-age">Followed: ${viewer.followAge}</span>
            </div>
        `;

        viewerList.appendChild(listItem);
    });
}

// Refresh the viewer list every 30 seconds
setInterval(fetchViewers, 30000);

// Initial fetch on page load
fetchViewers();
