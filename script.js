// //TASK 1
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function iterateWithAsyncAwait(values) {
//     for (let value of values) {
//       console.log(value);
//       await delay(1000);  
//     }
//   }

//   const values = [1, 2, 3, 4, 5];
//   iterateWithAsyncAwait(values);
  



// //TASK 2
// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ data: 'Data from API' });
//       }, 2000); 
//     });
//   }
  
//   async function awaitCall() {
//     console.log('Fetching data');
//     const response = await fetchData(); 
//     console.log('Data received:', response.data);
//   }
//   awaitCall();
  



// //TASK 3a
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = Math.random() > 0.5; 
//         if (success) {
//           resolve({ data: 'Data from API' });
//         } else {
//           reject(new Error('Failed to fetch data'));
//         }
//       }, 2000); 
//     });
//   }
  
//   async function awaitCall() {
//     console.log('Fetching data from API...');
//     try {
//       const response = await fetchData(); 
//       console.log('Data received:', response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   }
//   awaitCall();




// //TASK 3b
//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function firstFunction() {
//     await delay(1000); 
//     console.log('First function completed');
//   }
  
//   async function secondFunction() {
//     await delay(1000); 
//     console.log('Second function completed');
//   }
  
//   async function thirdFunction() {
//     await delay(1000); 
//     console.log('Third function completed');
//   }
  
//   async function chainedAsyncFunctions() {
//     await firstFunction();
//     await secondFunction();
//     await thirdFunction();
//   }
  
//   chainedAsyncFunctions();



// //TASK 5
// function fetchData(url) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ url, data: `Sample data from ${url}` });
//       }, Math.random() * 2000 + 1000); 
//     });
//   }
  
//   async function parallelCalls(urls) {
//     console.log('Fetching data from all URLs concurrently...');
  
//     const fetchPromises = urls.map(url => fetchData(url));
  
//     const responses = await Promise.all(fetchPromises);
  
//     console.log('Data received from all URLs:', responses);
//   }
//   const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
//   parallelCalls(urls);
  