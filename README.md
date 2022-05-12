# Canonical Url extension

This extensions creates redirects so that DuROom can only be accessed via the url defined in `config.php`.

> **First note:** your host might already be doing those redirects for you.
> If that's the case, then you don't need this extension.

> **Second note:** if your host supports configuring redirects (via Apache Rewrites or Nginx server rules for example), I recommend using that instead of an extension for better performance.
> If those features are not available or if you don't have the technical knowledge to use them, then this extension is for you!

> **Third note:** this extension does not work with DuROom installs in subfolders.

## Installation

```bash
composer require duroom/canonical
```

## Updating

```bash
composer require duroom/canonical
php duroom cache:clear
```

## Documentation

To enable the redirects, first enable the extension in your DuRoom dashboard.
Then access the extension settings and select a redirect status.

The extension settings will only be available when you access the forum via the canonical url.
This should prevent you from getting locked outside of the forum if DuRoom cannot actually be reached via the url defined in `config.php`.

Before continuing, you should make sure the `url` value in `config.php` is the URL you want as canonical.
In particular if HTTPS is enabled on your host (as it should), make sure the canonical url includes `https://`.

You should first enable the temporary redirect option, so you can test the redirects without them being cached in every browser and search engine browsing the forum.
If your forum uses a bare domain (no `www.` subdomain), try accessing the `www.` subdomain and you should be redirected with a 302 status.
If your forum uses a `www.` subdomains, try accessing the bare domain (without `www.`).

Likewise, if your forum uses an HTTPS canonical url (again, as it should), trying to access it via `http://` should result in a 302 redirect to `https://`.

Once you confirmed everything is okay, you can switch the redirect status to permanent.
The redirect status code will be switched from 302 to 301.
Browsers and search engines will cache those redirects and stop to consider those pages as duplicates.

## Rescue mission

If you somehow get locked out of your forum because of a faulty redirect, here's what you can do:

- If you changed your forum hostname, update the `url` value in `config.php` and the extension will now redirect to that new url
- If you need to disable the redirects but don't have access to the dashboard anymore, you can manually edit the `duroom-canonical.status` entry in the `settings` table of your forum database. Set the value to `0` to disable the redirects

In any case, if a permanent redirect was cached and prevents you from accessing the address you need, you might have to clear:

- Your browser cache
- Cloudflare cache or the cache of other proxies your website is using
- If a search engine cached an incorrect redirect, you'll have to wait for it to expire or try to manually submit the page to the search engine for a new try

## A DuRoom extension

This is a free extension by DuRoom, an online forum migration tool (launching soon).
