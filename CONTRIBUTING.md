## Contributing

If you edit the generator, there is some npm commands to test or publish your changes.

When you want to test your changes in local, you must run the link command:

```bash
npm link
```

Then you can create a new project with `yo altran-angular`.

You can also lint and test the code:

```bash
npm test
```

When you are done, you can commit and publish the new npm package:

```bash
npm publish
```

## Npm publish fails

If something goes wrong with `npm publish`, make sure to login yourself on npm and then fill the blanks:

```bash
npm login
```

And increment the `package.json` version.