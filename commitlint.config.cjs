module.exports = {
    extends: ['@commitlint/cli', '@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert'
            ]
        ],
        'subject-case': [2, 'always', 'sentence-case']
    }
}
// for flexible commit messages
// module.exports = {
//     extends: ['@commitlint/cli', '@commitlint/config-conventional'],
//     rules: {
//         // Disable the type-enum rule
//         'type-enum': [0], // 0 disables the rule

//         // Disable the type-empty rule to allow commits without a type
//         'type-empty': [0], // 0 disables the rule

//         // Disable the subject-case rule
//         'subject-case': [0], // 0 disables the rule

//         // Optionally, disable subject-empty to allow empty subjects
//         'subject-empty': [0], // 0 disables the rule

//         // Disable other rules if needed
//     }
// }
