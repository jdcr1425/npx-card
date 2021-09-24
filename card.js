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
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'double',
    borderColor: 'yellow',
  }
);

console.log(me);
