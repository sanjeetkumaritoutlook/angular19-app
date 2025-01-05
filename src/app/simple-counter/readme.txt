Explanation:
---
State Management:

count is a simple TypeScript property holding the current state.
doubleCount is a getter property that calculates the derived state whenever it’s accessed.
Template Binding:

Directly bind count and doubleCount to the template using Angular's interpolation syntax ({{ ... }}).
State Update:

increment() directly modifies the count property.
Derived State:

The doubleCount getter ensures the derived state is always up-to-date without explicitly recomputing it or managing subscriptions.
