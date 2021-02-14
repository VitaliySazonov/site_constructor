const model = [
  { type: "title", value: "Hello World from JS" },
  { type: "text", value: "here we go with some text" },
  { type: "columns", value: ["1111", "2222222", "33333333"] },
];

const $site = document.querySelector('#site')

model.forEach(block => {
  console.log(block)
  let html = ''
  if (block.type === 'title') {
    html = `
      <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>
    `
  } else if(block.type === 'text') {
    html = `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
    `
  } else if (block.type === 'columns') {
    html = `
    
    `
  }
  
  $site.insertAdjacentHTML('beforeend', html)
})