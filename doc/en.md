# generator-daddy

<p>
<img src="https://img.shields.io/github/license/Peng-Hello/generator-daddy">
<img alt="npm" src="https://img.shields.io/npm/v/generator-daddy">
</p>

[中文版](../README.md)

## Introduction
generator-daddy is a library for npm that works with Yeoman to quickly build scaffolding for Web projects.
It was developed to allow us to focus on the development of the project rather than spending time doing repetitive work.

## Installation
npm i generator-daddy

## How to use
```shell
# Yeoman must be installed before generator-daddy can be used
npm install -g yo
# Install generator-daddy generator
npm install -g generator-daddy
# Use generator-daddy to generate the project (Default Express project)
yo daddy
# Generate the front-end Vue project
yo daddy:vue
```
## Notice
```shell
# If you're using an unofficial npm source, you might run into npm packages not found. Try the following command
npm config set registry https://registry.npmjs.org/
```
- Add the front-end project generation template
