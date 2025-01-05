Explanation of Code:
---
BehaviorSubject:

We use BehaviorSubject to hold the current state (count) and allow subscriptions to its changes.
It stores the current value and emits it to new subscribers immediately.
Observables:

count$ is an observable that emits the current value of the countSubject.
doubleCount$ is a derived observable created using the map operator, which computes the double of the count value.
Template Binding:

The async pipe in the template subscribes to count$ and doubleCount$, automatically updating the UI when their values change.
State Update:

increment() updates the value of countSubject, which triggers re-emission of count$ and recomputation of doubleCount$.