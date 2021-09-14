import { strings } from '@angular-devkit/core';
import {
    apply,
    chain,
    externalSchematic, MergeStrategy, mergeWith,
    Rule,
    SchematicContext,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';

export function presentationalComponent(_options: {[key: string]: any}): Rule {
    return (_tree: Tree, _context: SchematicContext) => {

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize
                })
            ]
        );

        return chain([
            externalSchematic('@schematics/angular', 'component', _options),
            mergeWith(templateSource, MergeStrategy.Overwrite)
        ]);
    };
}
