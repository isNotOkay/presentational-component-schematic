import { chain, externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function presentationalComponent(_options: {[key: string]: any}): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        console.log(_options);
        /*_options.name = basename(_options.name);

        const templateSource = apply(
            url('./files'), [
                template({
                    ..._options,
                    classify: strings.classify,
                    dasherize: strings.dasherize
                })
            ]
        );*/

        return chain([
            externalSchematic('@schematics/angular', 'component', _options),
            //mergeWith(templateSource, MergeStrategy.Overwrite)
        ]);
    };
}
