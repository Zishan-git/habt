let customHabits = StorageHelper.get('customHabits', []);

document.addEventListener('DOMContentLoaded', function() {
    setupFormValidation();
    displayHabits();
    updateLeaderboard();
});

function setupFormValidation() {
    const form = document.getElementById('habitForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const habitName = document.getElementById('habitName').value.trim();
        const category = document.getElementById('habitCategory').value;
        const duration = parseInt(document.getElementById('habitDuration').value);
        const description = document.getElementById('habitDescription').value.trim();
        const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        const goal = document.getElementById('habitGoal').value.trim();

        // Validation
        let hasError = false;

        if (!habitName) {
            document.getElementById('nameError').textContent = 'Habit name is required';
            hasError = true;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        if (duration < 1) {
            document.getElementById('durationError').textContent = 'Duration must be at least 1 minute';
            hasError = true;
        } else {
            document.getElementById('durationError').textContent = '';
        }

        if (!goal) {
            document.getElementById('goalError').textContent = 'Daily goal is required';
            hasError = true;
        } else {
            document.getElementById('goalError').textContent = '';
        }

        if (hasError) {
            showNotification('Please fix the errors above', 'error');
            return;
        }

        // Create habit object
        const newHabit = {
            id: Date.now(),
            name: habitName,
            category: category,
            duration: duration,
            description: description,
            difficulty: difficulty,
            goal: goal,
            createdDate: new Date().toISOString(),
            streak: 0,
            lastCompleted: null,
            completions: []
        };

        customHabits.push(newHabit);
        StorageHelper.set('customHabits', customHabits);

        showNotification('✓ Habit created successfully!', 'success');
        form.reset();
        displayHabits();
        updateLeaderboard();
    });
}

function displayHabits() {
    const habitsList = document.getElementById('habitsList');
    if (!habitsList) return;

    if (customHabits.length === 0) {
        habitsList.innerHTML = '<p class="empty-state">No custom habits yet. Create one above to get started!</p>';
        return;
    }

    habitsList.innerHTML = '';

    customHabits.forEach((habit, index) => {
        const habitEl = document.createElement('div');
        habitEl.className = 'habit-item';
        habitEl.innerHTML = `
            <div class="habit-item-info">
                <h3>${habit.name}</h3>
                <div class="habit-item-meta">
                    <span>${habit.category}</span>
                    <span>${habit.duration} min</span>
                    <span>Difficulty: ${habit.difficulty}</span>
                    <span>Streak: ${habit.streak} days</span>
                </div>
            </div>
            <div class="habit-item-actions">
                <button class="btn-mark-done" onclick="markHabitDone(${habit.id})">✓ Done Today</button>
                <button class="btn-delete" onclick="deleteHabit(${habit.id})">Delete</button>
            </div>
        `;

        habitsList.appendChild(habitEl);
    });
}

function markHabitDone(habitId) {
    const habit = customHabits.find(h => h.id === habitId);
    if (!habit) return;

    const today = new Date().toDateString();
    const lastCompleted = new Date(habit.lastCompleted || 0).toDateString();

    if (lastCompleted === today) {
        showNotification('You already completed this habit today!', 'warning');
        return;
    }

    // Check if streak should continue
    if (lastCompleted !== new Date(Date.now() - 86400000).toDateString() && habit.lastCompleted) {
        habit.streak = 0; // Reset streak if day was skipped
    }

    habit.streak++;
    habit.lastCompleted = new Date().toISOString();
    habit.completions.push(new Date().toISOString());

    StorageHelper.set('customHabits', customHabits);
    showNotification(`✓ ${habit.name} completed! Streak: ${habit.streak}`, 'success');

    displayHabits();
    updateLeaderboard();
}

function deleteHabit(habitId) {
    if (!confirm('Are you sure you want to delete this habit?')) return;

    customHabits = customHabits.filter(h => h.id !== habitId);
    StorageHelper.set('customHabits', customHabits);

    showNotification('Habit deleted', 'success');
    displayHabits();
    updateLeaderboard();
}

function updateLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    if (!leaderboardBody) return;

    const yourStreak = customHabits.reduce((max, h) => Math.max(max, h.streak), 0);
    const yourHabits = customHabits.length;

    document.getElementById('yourStreak').textContent = yourStreak;
    document.getElementById('yourHabits').textContent = yourHabits;

    // Add some sample data
    leaderboardBody.innerHTML = `
        <div class="leaderboard-row">
            <span>1</span>
            <span>You</span>
            <span>${yourStreak}</span>
            <span>${yourHabits}</span>
        </div>
        <div class="leaderboard-row">
            <span>2</span>
            <span>Alex M.</span>
            <span>28</span>
            <span>5</span>
        </div>
        <div class="leaderboard-row">
            <span>3</span>
            <span>Sarah K.</span>
            <span>25</span>
            <span>4</span>
        </div>
    `;
}