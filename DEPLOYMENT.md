# cPanel Git deployment

This folder is ready for cPanel Git deployment.

Important:

1. `.cpanel.yml` must stay in the root of the repository, beside `index.html`.
2. Commit every file before clicking **Deploy HEAD Commit** in cPanel.
3. If your site should deploy somewhere other than `public_html`, edit this line in `.cpanel.yml`:

```yml
- export DEPLOYPATH=$HOME/public_html/
```

For example, if your cPanel account expects the site in a subfolder, use something like:

```yml
- export DEPLOYPATH=$HOME/public_html/your-folder/
```

Do not leave uncommitted changes in the checked-out branch before deploying.
