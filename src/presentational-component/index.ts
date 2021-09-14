import { strings } from '@angular-devkit/core';
import {
    apply,
    chain,
    externalSchematic,
    MergeStrategy,
    mergeWith, move,
    Rule,
    SchematicContext, Source,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';

const widgetsPath: string = 'src/app/dashboard/widgets';
const storiesPath: string = 'src/stories';
const moduleName: string = 'dashboard';

export function presentationalComponent(_options: {[key: string]: any}): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
        const templateSource: Source = mergeFiles('./files/angular', widgetsPath, _options);
        const templateSourceStorybook: Source = mergeFiles('./files/storybook', storiesPath, _options);

        return chain([
            externalSchematic('@schematics/angular', 'component', {
                name: _options.name,
                path: widgetsPath,
                module: moduleName,
                skipImport: _options.skipImport,
                export: true
            }),
            mergeWith(templateSource, MergeStrategy.Overwrite),
            mergeWith(templateSourceStorybook, MergeStrategy.Overwrite)
        ]);
    };
}

function mergeFiles(sourcePath: string, destinationPath: string, _options: {[key: string]: any}): Source {
    return apply(
        url(sourcePath), [
            template({
                ..._options,
                ...strings
            }),
            move(destinationPath)
        ]
    );
}
