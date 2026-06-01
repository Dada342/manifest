# The Manifesto for AI-Driven Development

Four values. Twelve principles. A public record of people building software
with AI while keeping judgment, craft, and responsibility in the loop.

Read it: https://ai-driven-development.org

## What This Is

This repository is the source of truth for the manifesto and its signatories.

It contains:

- the canonical manifesto content
- one public YAML file per signatory
- the small Astro site that publishes the manifesto

This is not a framework, a certification, or a product. It is a shared text
for practitioners.

## Sign

Signing is public and Git-based: one YAML file, one pull request, no backend.

[Open the prefilled GitHub editor](https://github.com/ai-driven-dev/manifest/new/main/app/src/content/signatories?filename=YOUR-HANDLE.yml&value=github%3A%20your-handle%0Aname%3A%20Your%20Full%20Name%0Alinkedin%3A%20%23%20optional%20-%20https%3A%2F%2Fwww.linkedin.com%2Fin%2F...%0Aaffiliation%3A%20%23%20optional%20-%20title%20or%20company%0Asigned_on%3A%202026-05-08%0Astatement%3A%20%23%20optional%20-%20one-line%20public%20statement%20%28max%20280%20chars%29%0A)

Guide: [SIGNATORIES.md](./SIGNATORIES.md)  
Schema: [app/src/content/signatories/_SCHEMA.md](./app/src/content/signatories/_SCHEMA.md)

By signing, you say the manifesto reflects how you already work, or how you
mean to. You are not signing for your employer.

## Contribute

Pull requests are welcome for signatures, small fixes, documentation, site
improvements, accessibility, and tests.

Changes to the manifesto itself should start with an issue. The Core Team
preserves the canonical text.

Read [CONTRIBUTING.md](./CONTRIBUTING.md).

## Run Locally

```bash
cd app
npm ci
npm run dev
```

Checks:

```bash
cd app
npm run build
```

## License

Content is licensed under CC BY 4.0. Code is licensed under MIT.

See [LICENSE.md](./LICENSE.md).
