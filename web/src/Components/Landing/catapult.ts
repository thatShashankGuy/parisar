import Matter, { Events } from 'matter-js'

function catapult() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies


    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    let elem = document.getElementById("animation-block")
    var render = Render.create({
        element: elem!,
        engine: engine,
        options: {
            width: 800,
            height: 700,
            showAngleIndicator: true,
            showCollisions: true,
            showVelocity: true,
            wireframes: true,


        },



    });

    Render.run(render);
    render.canvas.style.backgroundColor = 'transparent';
   // create runner
   var runner = Runner.create();
   Runner.run(runner, engine);

   // add bodies
   var rows = 10,
       yy = 600 - 25 - 40 * rows;

   var stack = Composites.stack(400, yy, 5, rows, 0, 0, function(x:any, y:any) {
       return Bodies.rectangle(x, y, 30, 30);
   });

   Composite.add(world, [
       stack,
       // walls
       Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
       Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
       Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
   ]);

   var ball = Bodies.circle(50, 200, 25, { 
    density: 0.04, 
    frictionAir: 0.005,
    render :{
        fillStyle:"#c03416",
        strokeStyle: '#c03416',
        lineWidth: 1 
   }});

   

    
   
   Composite.add(world, ball);
   Composite.add(world, Constraint.create({
       pointA: { x: 300, y: 100 },
       bodyB: ball,
       render: {
        visible: true, 
        lineWidth: 2,
        strokeStyle: '#c03416', 
        type: 'line'
    }
   }));

   // add mouse control
   var mouse = Mouse.create(render.canvas),
       mouseConstraint = MouseConstraint.create(engine, {
           mouse: mouse,
           constraint: {
               stiffness: 0.5,
               render: {
                   visible: false
               }
           }
       });

   Composite.add(world, mouseConstraint);

   // keep the mouse in sync with rendering
   render.mouse = mouse;

   // fit the render viewport to the scene
   Render.lookAt(render, {
       min: { x: 0, y: 0 },
       max: { x: 800, y: 600 }
   });

   Events.on(render, 'afterRender', function() {
    var context = render.context;
    var text = 'Hello and Welcome';
    var x = 90;
    var y = 148;
    var fontSize = 24;

    context.font = fontSize + 'px monospace';
    context.fillStyle = '#c03416';
    context.fillText(text, x, y);
    var textWidth = context.measureText(text).width;
    context.beginPath();
    context.strokeStyle = '#c03416';
    context.lineWidth = 2;
    context.moveTo(x, y + 5); // 5 is the approximate offset for the underline
    context.lineTo(x + textWidth, y + 5);
    context.stroke();
});

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        destroy: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.Engine.clear(this.engine);
            if (this.render.canvas) {
                this.render.canvas.remove();
                console.log('Canvas after removal:', this.render.canvas);
            }
            this.render.textures = {};
        }
    };
};

export default catapult