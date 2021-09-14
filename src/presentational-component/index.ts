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

export function presentationalComponent(_options: {[key: string]: any}): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        console.log(_options);
        // TODO: Is there a better way to locate all files into the src/app folder?
        _options.path = `src/app/${_options.path}`;

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    ...strings
                }),
                move(_options.path)
            ]
        );

        return chain([
            externalSchematic('@schematics/angular', 'component', {
                name: _options.name,
                path: _options.path,
                skipImport: true
            }),
            mergeWith(templateSource, MergeStrategy.Overwrite)
        ]);
    };
}
