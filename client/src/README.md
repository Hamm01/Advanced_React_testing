# React.Memo example

on Browser page when in input changes "parent component" so our counter component which is "Child component" in App.tsx rerenders so to solve this issue we
use React.Memo

# Instructions

Basic how to use React Memo , we can see the counter .tsx

export const Counter = memo(Component)

what happened that when we change input it will not rerender our Counter component
