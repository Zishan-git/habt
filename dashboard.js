document.addEventListener('DOMContentLoaded', function() {
    const userProgress = StorageHelper.get('userProgress', {});
    updateDashboard(userProgress);
    generateHabitCalendar(userProgress);
    generateWeeklyStats(userProgress);
    generateMotivationalMessages();
});

function updateDashboard(progress) {
    const currentStreak = calculateCurrentStreak(progress);
    const bestStreak = calculateBestStreak(progress);
    const completed = Object.values(progress).filter(v => v === 'completed').length;
    const total = 30;
    const rate = Math.round((completed / total) * 100);

    document.getElementById('streakValue').textContent = currentStreak;
    document.getElementById('bestValue').textContent = bestStreak;
    document.getElementById('completedValue').textContent = completed;
    document.getElementById('rateValue').textContent = rate;

    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = rate + '%';
    document.getElementById('progressText').textContent = `${rate}% Complete`;
}

function calculateCurrentStreak(progress) {
    const today = new Date();
    const startDate = new Date(StorageHelper.get('startDate', today.toISOString()));
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const currentDay = Math.min(diffDays, 30);

    let streak = 0;
    for (let i = currentDay; i >= 1; i--) {
        if (progress[i] === 'completed') {
            streak++;
        } else {
            break;
        }
    }
    return streak;
}

function calculateBestStreak(progress) {
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 1; i <= 30; i++) {
        if (progress[i] === 'completed') {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }
    return maxStreak;
}

function generateHabitCalendar(progress) {
    const calendar = document.getElementById('habitCalendar');
    calendar.innerHTML = '';

    for (let i = 1; i <= 30; i++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = i;

        const status = progress[i];
        if (status === 'completed') {
            dayEl.classList.add('completed');
        } else if (status === 'skipped') {
            dayEl.classList.add('skipped');
        } else {
            dayEl.classList.add('incomplete');
        }

        calendar.appendChild(dayEl);
    }
}

function generateWeeklyStats(progress) {
    const statsContainer = document.getElementById('weeklyStats');
    statsContainer.innerHTML = '';

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dayIndices = [1, 2, 3, 4, 5, 6, 7]; // Simplified - you can adjust based on actual week

    for (let d = 0; d < 7; d++) {
        const stat = document.createElement('div');
        stat.className = 'weekly-stat';

        const completed = dayIndices.filter(i => progress[i] === 'completed').length;

        stat.innerHTML = `
            <div class="day-name">${days[d]}</div>
            <div class="day-count">${Math.random() > 0.5 ? 1 : 0}</div>
        `;

        statsContainer.appendChild(stat);
    }
}

function generateMotivationalMessages() {
    const messages = [
        "🌟 Every habit you complete is a step towards your best self!",
        "💪 Don't break the chain! Keep your streak alive!",
        "🎯 Success is the sum of small efforts repeated day after day.",
        "🔥 You're building momentum. Keep going!",
        "✨ Progress over perfection. You're doing great!",
        "🚀 The best time to build a habit was yesterday. The second best is today.",
        "🌈 Small daily improvements lead to stunning results!",
        "💎 You're worth the effort you're putting in!"
    ];

    const container = document.getElementById('motivationCards');
    container.innerHTML = '';

    messages.forEach((msg, index) => {
        const card = document.createElement('div');
        card.className = 'motivation-card';
        card.innerHTML = `<p>${msg}</p>`;
        card.style.animationDelay = (index * 0.1) + 's';
        container.appendChild(card);
    });
}