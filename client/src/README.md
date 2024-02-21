# React.Memo example

on Browser page when in input changes "parent component" so our counter component which is "Child component" in App.tsx rerenders so to solve this issue we
use React.Memo

# Instructions

Basic how to use React Memo , we can see the counter .tsx

export const Counter = memo(Component)

what happened that when we change input it will not rerender our Counter component

Now some advance usage with prevProps and newPRops..
so whenever this
export const Counter = memo(Component,(prevProps , newProps) => {
return true
})
will return true it means our prevprop and newprops are same, by returing the true it meant when our parent component
will rendrenders our memo funciton will not rerenders..

export const Counter = memo(Component,(prevProps , newProps) => {
return false
})
but false meant by it will rerender the counter function whenever our parent compoent changes. its not necssary that
our prev or new props are differnt, if they are same then also this memo component will rerenders

---

We have otherPRops in the counter component, which is same in each render . so if that value is same as prev our counter
compnent will not rerender
