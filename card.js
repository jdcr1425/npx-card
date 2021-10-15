#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');

clear();

const data = {
  name: chalk.bold.cyan('                      Juan David Casseres Rodriguez'),
  handle: chalk.white('@jdcr1425'),
  work: `${chalk.white('Backend Developer at')} ${chalk
    .hex('#cca918')
    .bold('Condor Labs')}`,
  github: chalk.gray('https://github.com/') + chalk.green('jdcr1425'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('juan_casseres7'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('juancasseres'),
  web: chalk.cyan('https://juancasseres.me'),
  npx: chalk.red('npx') + ' ' + chalk.white('juancasseres'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    //`${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold(
      '- Mae West - You only live once, but if you do it right, once is enough.'
    )}`,
    ,
    /* `${chalk.bold(
      "developer, I'm from Colombia and I'm in love with 3 things:"
    )}` */ ``,
    /* `${chalk.bold('1. Learning new Things 🧠')}`,
    `${chalk.bold('2. Inviting people to know the tech world 💻')}`,
    `${chalk.bold('3. My family 👪')}`, */
  ].join('\n'),
  {
    margin: 2,
    float: 'center',
    padding: 1,
    borderStyle: 'double',
    borderColor: 'yellow',
  }
);

/* 
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation 


FEAT 

feat smt 

Previous tag was v0.1.8, previous version was 0.1.8.
Analyzing commit: feat smt
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.9.
New tag after applying prefix is v0.1.9.

FIX

fix the margin

Previous tag was v0.1.0, previous version was 0.1.0.
Analyzing commit: fix the margin
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.1.

DOCS

docs to semantic commit

Previous tag was v0.1.2, previous version was 0.1.2.
Analyzing commit: docs to semantic commit
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.3.
New tag after applying prefix is v0.1.3.

STYLE

style added

Previous tag was v0.1.3, previous version was 0.1.3.
Analyzing commit: style added
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.4.
New tag after applying prefix is v0.1.4.

REFACTOR 

refactor smt

Previous tag was v0.1.4, previous version was 0.1.4.
Analyzing commit: refactor smt
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.5.
New tag after applying prefix is v0.1.5.

PERF

perf smt 

Previous tag was v0.1.5, previous version was 0.1.5.
Analyzing commit: perf smt
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.6.
New tag after applying prefix is v0.1.6.


TEST

test smt

Previous tag was v0.1.6, previous version was 0.1.6.
Analyzing commit: test smt
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.7.
New tag after applying prefix is v0.1.7.

CHORE

chore smt 

Previous tag was v0.1.7, previous version was 0.1.7.
Analyzing commit: chore smt
The commit should not trigger a release
Analysis of 1 commits complete: no release
New version is 0.1.8.
New tag after applying prefix is v0.1.8.
*/

console.log(me);
