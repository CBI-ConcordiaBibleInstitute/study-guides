# study-guides-site

## Pull request previews

This repository now includes GitHub Actions workflows that publish a live preview for each pull request before it is merged.

### What happens now

- Pushes to the repository's default branch deploy the production site to the `gh-pages` branch.
- Pull requests automatically publish a preview to `gh-pages/pr-preview/<pr-number>/`.
- The preview workflow leaves a sticky PR comment with the preview URL, then refreshes that preview whenever the PR is updated.
- Closing a pull request removes its preview so old previews do not pile up.

### One-time GitHub repository setup

To make the preview workflow work in GitHub:

1. Go to **Settings → Pages** and set the site source to **Deploy from a branch**.
2. Choose the **`gh-pages`** branch and the **`/ (root)`** folder.
3. Go to **Settings → Actions → General → Workflow permissions**.
4. Set workflow permissions to **Read and write permissions**.

### Notes

- The preview workflow is configured for same-repository pull requests using the default `github.token`.
- If you also need previews for forks, add a dedicated personal access token and wire it into the preview workflow.
