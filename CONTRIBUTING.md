## Contributing

If you edit the generator, there is some npm commands to test or publish your changes.

When you want to test your changes in local, you must run the link command:

```bash
npm link
```

Then you can create a new project with `yo cozen-angular`.

You can also lint and test the code:

```bash
npm test
```

When you are done, you must:

- Update the [CHANGELOG](CHANGELOG.md) file (follow the **Keep a Changelog**)
 
If after your commit you want to create a new tag, you must:

- Update the [CHANGELOG](CHANGELOG.md) file by adding a new tag
- Update the [Package version](package.json)
- Commit and push your changes 
- Checkout the master
- Merge the develop into the master
- Create a new tag
- Commit and push the merge and the new tag
- Publish the new npm package

```bash
npm publish
```

### Errors

**New npm version ?**

Keep in mind to always increment the `package.json` version before publishing.

**Npm publish fails ?**

If something goes wrong with `npm publish`, make sure to login yourself on npm and then fill the blanks:

```bash
npm login
```
 