# Wryter

Get a random writing prompt every day.

## Tech Stack

* Vue
* Express

## Development Process

### GitFlow

This project uses the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) process for branching. To start work on a new feature or bugfix create a new branch off of the latest release branch (branches beginning with the prefix `release/`)

### Getting Started

Make sure you have all the following dependencies installed:

    * Node (preferrably installed via [NVM](https://github.com/nvm-sh/nvm))

1) Fork this repository and clone your new repository.

2) Install all packages:

    - `cd frontend'
    - `npm install`

### Starting a New Feature

1) Find a feature or a bug in the **To Do** column of the [Kanban Board](https://github.com/davideugenepratt/wryter/projects/2) and create a new git branch with the prefix `feature/` from the latest release branch

    - `git fetch && git checkout -b feature/1-feature-name`

2) Push your branch to your remote and open a PR on the repo from your forked repository and associate that PR with the issue assigned to the feature.

3) As you work through the feature be sure to push your changes to the remote so the PR stays updated.
