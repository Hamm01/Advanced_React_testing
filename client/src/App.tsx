import Calendar from "./components/Calendar"
import { EventsProvider } from "./context/Event"

Calendar
function App() {

  return (
    <EventsProvider>
      <Calendar />

    </EventsProvider>)
}

export default App
