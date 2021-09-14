import { strings } from '@angular-devkit/core';
import {
    apply,
    chain,
    externalSchematic,
    MergeStrategy,
    mergeWith, move,
    Rule,
    SchematicContext,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';

// TODO: Is there a better way to locate all files into the src/app folder?
const sourceRoot: string = 'src/app';

export function presentationalComponent(_options: {[key: string]: any}): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        _options.path = _options.path ? `${sourceRoot}/${_options.path}` : sourceRoot;

        const templateSource = apply(
            url('./files/angular'), [
                template({
                    ..._options,
                    ...strings
                }),
                move(_options.path)
            ]
        );

        const templateSourceStorybook = apply(
            url('./files/storybook'), [
                template({
                    ..._options,
                    ...strings
                }),
                move('src/stories')
            ]
        );

        return chain([
            externalSchematic('@schematics/angular', 'component', {
                name: _options.name,
                path: _options.path,
                module: _options.module,
                skipImport: _options.skipImport
            }),
            mergeWith(templateSource, MergeStrategy.Overwrite),
            mergeWith(templateSourceStorybook, MergeStrategy.Overwrite)
        ]);
    };
}
