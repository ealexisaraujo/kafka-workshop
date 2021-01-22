const { Kafka } = require('kafkajs');

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['0.0.0.0:9092'],
    });
    const admin = kafka.admin();
    console.log('Connecting');
    await admin.connect();
    console.log('Connected');
    //A-M
    await admin.createTopics({
      topics: [
        {
          topic: 'Users',
          numPartitions: 2,
        },
      ],
    });
    console.log('Created successfully!');
    await admin.disconnect();
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
}
