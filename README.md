# Wryter

Get a random writing prompt every day.

## Tech Stack

* Vue
* Express

## Contributing

### Slack

The slack channel for the project is: [wryterworkspace.slack.com](https://wryterworkspace.slack.com) send a request to david@davideugenepratt.com to get access to the Slack channel.

### Design

The [Sketch file](https://drive.google.com/file/d/19m6kP4Li3ULqfAKfkQE_u0GOm0OP8N7w/view?usp=sharing) includes wireframes and HiFis (eventually).

### GitFlow

This project uses the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) process for branching. To start work on a new feature or bugfix create a new branch off of the latest release branch (branches beginning with the prefix `release/`)

### Getting Started

Make sure you have all the following dependencies installed:

    * Node (v10+ preferrably installed via [NVM](https://github.com/nvm-sh/nvm))

1) Fork this repository and clone your new repository.

2) Install all packages:
<<<<<<< HEAD

    - `cd frontend'
=======
    - `cd frontend`
<<<<<<< HEAD
>>>>>>> origin
=======
>>>>>>> e57a109419bc5a753d63f7cb87e8dc6d2f7706de
>>>>>>> release/0
    - `npm install`

### Starting a New Feature

1) Find a feature or a bug in the **To Do** column of the [Kanban Board](https://github.com/davideugenepratt/wryter/projects/2) and create a new git branch with the prefix `feature/` from the latest release branch

    - `git fetch && git checkout -b feature/{feature number} origin/release/{release number}`

2) Push your branch to your remote and open a PR on the repo from your forked repository and associate that PR with the issue assigned to the feature.

3) As you work through the feature be sure to push your changes to the remote so the PR stays updated.
