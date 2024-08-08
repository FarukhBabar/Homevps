import EventEmitter from 'events';

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Set max listeners
myEmitter.setMaxListeners(20);

// Use the EventEmitter in your application
myEmitter.on('someEvent', () => {
  console.log('someEvent triggered');
});

// Trigger the event for demonstration
myEmitter.emit('someEvent');
