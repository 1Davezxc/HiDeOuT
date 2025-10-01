document.addEventListener('DOMContentLoaded', function() {
    const membersGrid = document.getElementById('membersGrid');
    const memberSearch = document.getElementById('memberSearch');
    const roleFilter = document.getElementById('roleFilter');

    // Array of all 50+ members
    const allMembers = [
        // Guild Master
        {
            name: "^JEFF^",
            role: "guild-master",
            roleDisplay: "Guild Master",
            image: "images/jeff.jpg",
            description: "Strategic leader with 10+ years of gaming experience",
            joinDate: "2000",
            specialization: "Raid Strategy & Leadership",
            stats: {
                CastleWin: "1000+",
                pvpRank: "Top 1",
                experience: "10+ years"
            }
        },
        // Officers
        {
            name: "Legendary",
            role: "officer",
            roleDisplay: "Officer",
            image: "images/dam.jpg",
            description: "Solid Member",
            joinDate: "2000",
            specialization: "PvP Combat",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
        {
            name: "Veltdranz",
            role: "officer",
            roleDisplay: "Officer",
            image: "images/velt.jpg",
            description: "Solid Member",
            joinDate: "2000",
            specialization: "PvP & Events",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
        {
            name: "Aithan",
            role: "officer",
            roleDisplay: "Officer",
            image: "images/athan.jpg",
            description: "Solid Member",
            joinDate: "2000",
            specialization: "Team Strategy",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
        {
            name: "Rudeboy",
            role: "officer",
            roleDisplay: "Coach",
            image: "images/rude.jpg",
            description: "Solid Member",
            joinDate: "2000",
            specialization: "Defense & Support",
            stats: {
               Session: "500+",
                winRate: "100%",
                experience: "25 years"
            }
        },
       {
            name: "Jess",
            role: "veteran", // or "member", "new"
            roleDisplay: "Veteran",
            image: "images/jess.jpg",
            description: "Solid Member",
            joinDate: "2022",
            specialization: "Their specialty",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
       {
            name: "Dave",
            role: "veteran", // or "member", "new"
            roleDisplay: "Veteran",
            image: "images/dave.jpg",
            description: "Solid Member",
            joinDate: "2022",
            specialization: "Their specialty",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
        {
            name: "Khalid",
            role: "veteran", // or "member", "new"
            roleDisplay: "Veteran",
            image: "images/khalid.jpg",
            description: "Solid Member",
            joinDate: "2022",
            specialization: "Their specialty",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
        {
            name: "MGrinO",
            role: "veteran", // or "member", "new"
            roleDisplay: "Veteran",
            image: "images/jun2.jpg",
            description: "Solid Member",
            joinDate: "2022",
            specialization: "Their specialty",
            stats: {
                duels: "500+",
                winRate: "85%",
                experience: "8 years"
            }
        },
        
    ];

    // Load all members
    function loadMembers() {
        const searchTerm = memberSearch.value.toLowerCase();
        const selectedRole = roleFilter.value;

        const filteredMembers = allMembers.filter(member => {
            const matchesSearch = member.name.toLowerCase().includes(searchTerm) || 
                                member.description.toLowerCase().includes(searchTerm);
            const matchesRole = selectedRole === 'all' || member.role === selectedRole;
            return matchesSearch && matchesRole;
        });

        displayMembers(filteredMembers);
    }

    function displayMembers(members) {
        membersGrid.innerHTML = '';

        if (members.length === 0) {
            membersGrid.innerHTML = '<div class="loading">No members found</div>';
            return;
        }

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card-large';
            memberCard.innerHTML = `
                <div class="role-badge role-${member.role}">${member.roleDisplay}</div>
                <div class="member-avatar-large">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h3 class="member-name-large">${member.name}</h3>
                <p class="member-role-large">${member.roleDisplay}</p>
                <p class="member-desc-large">${member.description}</p>
                <div class="member-info">
                </div>
                <div class="member-stats">
                    ${Object.entries(member.stats).map(([key, value]) => `
                        <div class="member-stat">
                            <span class="member-stat-value">${value}</span>
                            <span class="member-stat-label">${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                        </div>
                    `).join('')}
                </div>
            `;
            membersGrid.appendChild(memberCard);
        });
    }



                   // <p><strong>Join Date:</strong> ${member.joinDate}</p>
                    //<p><strong>Specialization:</strong> ${member.specialization}</p>

    // Event listeners for search and filter
    memberSearch.addEventListener('input', loadMembers);
    roleFilter.addEventListener('change', loadMembers);

    // Initialize members
    loadMembers();

});

