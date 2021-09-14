import { basename, strings } from '@angular-devkit/core';
import {
    apply,
    chain,
    externalSchematic,
    MergeStrategy,
    mergeWith,
    Rule,
    SchematicContext,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function presentationalComponent(_options: {[key: string]: any}): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        _options.name = basename(_options.name);

        // TODO: Why is the project name "undefined"?
        if (!_options.project) {
            throw new Error('Please provide the project name. E.g: "--project myProject"');
        }

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize
                })
                //move(_options.path)
            ]
        );

        return chain([
            externalSchematic('@schematics/angular', 'component', _options),
            mergeWith(templateSource, MergeStrategy.Overwrite)
        ]);
    };
}
