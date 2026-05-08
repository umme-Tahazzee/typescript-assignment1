# How `Pick` and `Omit` help avoid code duplication in TypeScript (DRY principle)

## Introduction

In TypeScript, we often define a large “master” interface that represents a full entity (like a User, Product, or Book). But in real applications, we don’t always need all properties everywhere.

Instead of rewriting similar interfaces again and again, TypeScript gives us two powerful utility types: **`Pick`** and **`Omit`**.

They help us create smaller, focused versions of a big interface without duplicating code.

---

## What problem are we trying to solve?

Imagine a big interface like this:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}