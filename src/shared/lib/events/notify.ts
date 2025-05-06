export const notify = (eventName: string) => {
    window.dispatchEvent(new Event(eventName));
}