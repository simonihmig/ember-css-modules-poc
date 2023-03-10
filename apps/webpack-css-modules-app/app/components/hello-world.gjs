import styles from './hello-world.module.css';

<template>
  <h1 class='jumbo'>
    <span class={{styles.hello}} data-test-hello>Hello</span>
    <span class={{styles.world}} data-test-world>World!</span>
  </h1>
</template>
