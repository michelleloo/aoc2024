# Advent of Code 2024

Welcome to my Advent of Code 2024 repository! 🎄✨  
This project contains my solutions to the [Advent of Code 2024](https://adventofcode.com/2024), an annual event featuring daily programming challenges during December. Each day brings a new puzzle designed to test problem-solving and coding skills.

## 🚀 Project Overview

This repository is implemented in **Javascript**, showcasing solutions that focus on clarity, efficiency, and leveraging modern JavaScript features. (I like to be able to read my solutions again)

## 📂 Repository Structure

```plaintext
aoc2024/
│
├── input/
│   ├── day1.js        # Puzzle input for Day 1
│   ├── day2.js        # Puzzle input for Day 2
│   ├── day3.js        # Puzzle input for Day 3
│   └── day4.txt        # Puzzle input for Day 4
│
├── solutions/
│   ├── day1.js        # Solution code for Day 1
│   ├── day2.js        # Solution code for Day 2
│   ├── day3.js        # Solution code for Day 3
│   └── day4.js        # Solution code for Day 4
│
├── fetchInput.js        # Pull puzzle input
├── package.json         
├── package-lock.json    
├── README.md            
└── .gitignore           

```
## 🛠️ How to Run

Follow these steps to run the solutions for each Advent of Code challenge:

1. **Clone the Repository**  
Clone the repository to your local machine:
```bash
git clone https://github.com/michelleloo/aoc2024.git
cd aoc2024
```
2. **Install Dependencies**
```bash
npm install
```
3. **Create a `.env` file**  
```bash
touch .env
```

4. **Add Session Token to your `.env` file**
```bash
SESSION_COOKIE={your_session_cookie}
```
Replace `your_session_cookie` with your Advent of Code session token. You can find this by inspecting your cookies after logging in on the Advent of Code website.

## 🚀 Usage
**Running Solutions**

Each solution is located in the solutions/ folder. To run a specific day's solution:

```bash
node solutions/dayX.js
```
Replace `X` with the day number (e.g., 1 for Day 1).
```bash
node solutions/day1.js
```

**Fetching Input**

To fetch input for a specific day:

```bash
node fetchInput.js X
```
Replace `X` with the day number. The input will be saved in the input/ folder as dayX.txt.

```bash
node fetchInput.js 1
```