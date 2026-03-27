const habits = [
    {
        day: 1,
        title: "just stat",
        icon: "🏃",
        description: "Go for a 30-minute jog or run to start your day with energy.",
        difficulty: "Medium",
        duration: "30 min",
        benefit: "Improves cardiovascular health and boosts metabolism."
    },
    {
        day: 2,
        title: "uyt ",
        icon: "📚",
        description: "Read at least 20 pages of a book of your choice.",
        difficulty: "Easy",
        duration: "20 min",
        benefit: "Enhances knowledge and improves focus and imagination."
    },
    {
        day: 3,
        title: "htg",
        icon: "🧘",
        description: "Meditate for 15 minutes to calm your mind and reduce stress.",
        difficulty: "Medium",
        duration: "15 min",
        benefit: "Reduces anxiety and improves mental clarity."
    },
    {
        day: 4,
        title: "Workout",
        icon: "💪",
        description: "Complete a 45-minute gym workout or home exercise routine.",
        difficulty: "Hard",
        duration: "45 min",
        benefit: "Builds strength and increases overall fitness levels."
    },
    {
        day: 5,
        title: "Drink Water",
        icon: "💧",
        description: "Drink 8 glasses of water throughout the day.",
        difficulty: "Easy",
        duration: "Daily",
        benefit: "Hydration improves skin and overall health."
    },
    {
        day: 6,
        title: "Healthy Cooking",
        icon: "🥗",
        description: "Prepare a healthy home-cooked meal with vegetables.",
        difficulty: "Medium",
        duration: "40 min",
        benefit: "Better nutrition and cooking skills development."
    },
    {
        day: 7,
        title: "Journaling",
        icon: "📔",
        description: "Write down your thoughts and feelings in a journal.",
        difficulty: "Easy",
        duration: "10 min",
        benefit: "Improves self-awareness and emotional intelligence."
    },
    {
        day: 8,
        title: "Language Learning",
        icon: "🌍",
        description: "Spend 30 minutes learning a new language using an app.",
        difficulty: "Medium",
        duration: "30 min",
        benefit: "Enhances cognitive abilities and cultural awareness."
    },
    {
        day: 9,
        title: "Yoga Practice",
        icon: "🧘‍♀️",
        description: "Practice yoga for 20 minutes to improve flexibility.",
        difficulty: "Medium",
        duration: "20 min",
        benefit: "Increases flexibility and body awareness."
    },
    {
        day: 10,
        title: "Social Connection",
        icon: "👥",
        description: "Call or visit a friend or family member for meaningful conversation.",
        difficulty: "Easy",
        duration: "20 min",
        benefit: "Strengthens relationships and boosts mood."
    },
    {
        day: 11,
        title: "Creative Art",
        icon: "🎨",
        description: "Create something artistic - draw, paint, or design for 30 minutes.",
        difficulty: "Medium",
        duration: "30 min",
        benefit: "Enhances creativity and provides stress relief."
    },
    {
        day: 12,
        title: "Cold Shower",
        icon: "❄️",
        description: "Take a cold shower to build resilience and energy.",
        difficulty: "Hard",
        duration: "10 min",
        benefit: "Increases mental toughness and circulation."
    },
    {
        day: 13,
        title: "Walk in Nature",
        icon: "🌲",
        description: "Take a 30-minute walk in a park or natural area.",
        difficulty: "Easy",
        duration: "30 min",
        benefit: "Reduces stress and improves mood and vitamin D."
    },
    {
        day: 14,
        title: "Skill Building",
        icon: "🎯",
        description: "Learn or practice a new skill for 45 minutes.",
        difficulty: "Medium",
        duration: "45 min",
        benefit: "Develops competence and career advancement."
    },
    {
        day: 15,
        title: "Gratitude Practice",
        icon: "🙏",
        description: "Write down 5 things you're grateful for today.",
        difficulty: "Easy",
        duration: "5 min",
        benefit: "Improves happiness and positive mindset."
    },
    {
        day: 16,
        title: "Swimming",
        icon: "🏊",
        description: "Go swimming for 30 minutes for full-body exercise.",
        difficulty: "Medium",
        duration: "30 min",
        benefit: "Low-impact exercise that builds endurance."
    },
    {
        day: 17,
        title: "Meal Prep",
        icon: "🍱",
        description: "Prepare healthy meals for the entire week ahead.",
        difficulty: "Hard",
        duration: "60 min",
        benefit: "Saves time and promotes healthy eating."
    },
    {
        day: 18,
        title: "Digital Detox",
        icon: "📵",
        description: "Stay off screens and social media for 2 hours.",
        difficulty: "Hard",
        duration: "120 min",
        benefit: "Improves mental health and sleep quality."
    },
    {
        day: 19,
        title: "Strength Training",
        icon: "🏋️",
        description: "Do 30 minutes of resistance training exercises.",
        difficulty: "Hard",
        duration: "30 min",
        benefit: "Builds muscle and bone density."
    },
    {
        day: 20,
        title: "Breathing Exercises",
        icon: "🌬️",
        description: "Practice deep breathing exercises for 10 minutes.",
        difficulty: "Easy",
        duration: "10 min",
        benefit: "Reduces stress and improves oxygen intake."
    },
    {
        day: 21,
        title: "Volunteering",
        icon: "❤️",
        description: "Volunteer or help someone in need for 1 hour.",
        difficulty: "Medium",
        duration: "60 min",
        benefit: "Increases sense of purpose and community."
    },
    {
        day: 22,
        title: "Tea Meditation",
        icon: "🫖",
        description: "Mindfully prepare and drink tea for 15 minutes.",
        difficulty: "Easy",
        duration: "15 min",
        benefit: "Promotes relaxation and mindfulness."
    },
    {
        day: 23,
        title: "Dancing",
        icon: "💃",
        description: "Dance for 20 minutes to your favorite music.",
        difficulty: "Medium",
        duration: "20 min",
        benefit: "Improves mood, coordination, and fitness."
    },
    {
        day: 24,
        title: "Cooking Challenge",
        icon: "👨‍🍳",
        description: "Cook a new recipe you've never tried before.",
        difficulty: "Medium",
        duration: "50 min",
        benefit: "Expands culinary skills and tries new cuisines."
    },
    {
        day: 25,
        title: "Stretching",
        icon: "🤸",
        description: "Do a full-body stretching routine for 15 minutes.",
        difficulty: "Easy",
        duration: "15 min",
        benefit: "Increases flexibility and reduces muscle tension."
    },
    {
        day: 26,
        title: "Podcast Learning",
        icon: "🎧",
        description: "Listen and learn from an educational podcast for 30 min.",
        difficulty: "Easy",
        duration: "30 min",
        benefit: "Passive learning and knowledge expansion."
    },
    {
        day: 27,
        title: "Photography Walk",
        icon: "📷",
        description: "Take a walk and photograph interesting things for 1 hour.",
        difficulty: "Medium",
        duration: "60 min",
        benefit: "Enhances observation and creative skills."
    },
    {
        day: 28,
        title: "Budget Planning",
        icon: "💰",
        description: "Plan and organize your finances for 30 minutes.",
        difficulty: "Medium",
        duration: "30 min",
        benefit: "Improves financial health and awareness."
    },
    {
        day: 29,
        title: "Hiking",
        icon: "⛰️",
        description: "Go on a challenging hike for 2 hours.",
        difficulty: "Hard",
        duration: "120 min",
        benefit: "Great cardio workout and mental refresh."
    },
    {
        day: 30,
        title: "Reflection",
        icon: "🌟",
        description: "Reflect on your month of habits and plan for next month.",
        difficulty: "Easy",
        duration: "30 min",
        benefit: "Celebrates progress and sets new goals."
    }
];

let userProgress = StorageHelper.get('userProgress', {});
let currentDay = getCurrentDay();

function getCurrentDay() {
    const startDate = StorageHelper.get('startDate', new Date().toISOString());
    if (!StorageHelper.get('startDate')) {
        StorageHelper.set('startDate', startDate);
    }
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return Math.min(diffDays, 30);
}

document.addEventListener('DOMContentLoaded', function() {
    loadHabitOfDay();
    updateProgressUI();
    generateCalendar();
});

function loadHabitOfDay() {
    const habit = habits[currentDay - 1];

    document.getElementById('habitTitle').textContent = habit.title;
    document.getElementById('habitDescription').textContent = habit.description;
    document.getElementById('habitIcon').textContent = habit.icon;
    document.getElementById('habitDifficulty').textContent = `${habit.difficulty}`;
    document.getElementById('habitDuration').textContent = habit.duration;
    document.getElementById('habitBenefit').textContent = habit.benefit;
    document.getElementById('dayNumber').textContent = currentDay;

    // Set button handlers
    document.getElementById('completeBtn').onclick = () => completeHabit();
    document.getElementById('skipBtn').onclick = () => skipHabit();
}

function completeHabit() {
    userProgress[currentDay] = 'completed';
    StorageHelper.set('userProgress', userProgress);
    showNotification('✓ Great job! Habit completed!', 'success');
    updateProgressUI();
    setTimeout(() => location.reload(), 1500);
}

function skipHabit() {
    if (confirm('Are you sure you want to skip today? Your streak will be affected.')) {
        userProgress[currentDay] = 'skipped';
        StorageHelper.set('userProgress', userProgress);
        showNotification('Habit skipped for today.', 'warning');
        updateProgressUI();
        setTimeout(() => location.reload(), 1500);
    }
}

function updateProgressUI() {
    const completed = Object.values(userProgress).filter(v => v === 'completed').length;
    const streak = calculateStreak();

    document.getElementById('streakCount').textContent = streak;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('completionRate').textContent = Math.round((completed / currentDay) * 100);
}

function calculateStreak() {
    let streak = 0;
    for (let i = currentDay; i >= 1; i++) {
        if (userProgress[i] === 'completed') {
            streak++;
        } else {
            break;
        }
    }
    return streak;
}

function generateCalendar() {
    const grid = document.getElementById('dayGrid');
    grid.innerHTML = '';

    for (let i = 1; i <= 30; i++) {
        const daySquare = document.createElement('div');
        daySquare.className = 'day-square';
        daySquare.textContent = i;

        const status = userProgress[i];
        if (status === 'completed') {
            daySquare.classList.add('completed');
        } else if (status === 'skipped') {
            daySquare.classList.add('skipped');
        }

        if (i === currentDay) {
            daySquare.style.borderRadius = '8px';
            daySquare.style.border = '3px solid #667eea';
        }

        grid.appendChild(daySquare);
    }
}