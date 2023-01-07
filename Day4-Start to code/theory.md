# Is Jsx Manadatory for react?
No

# Is ES6 mandatory for react?
No

# {TitleComponent} vs {TitleComponent /} vs {TitelComponent></TitleComcpmetn>}


# How Can I write comments in JSX?
For single line we can use //  for multiple line comments similar to js but should be enclose within {}

# What is Virtual Dom?
Virtual DOM is a copy of real dom, basically used for re rendering only the nodes which has been changed /updted.

# What is reconciliation in REact?
In react a cirtual dom is created and only those nodes which haas a change gets rerendered insted of the entire 
Dom tree getting rendered again, this is one of the reasons for react to have a fast perdormance.

# What si react fibre?
Its a new react reconcilation engone, mainly used for incremental rendering
# Why we need keys? When do we need keys?
During React reconcilation, when a new node gets added and if this new node is exctly similar to its sibling, react would find it difficult to identify as which node has added and it renders all the nodes whihc do not have a change. 
In order to over come this issue we add a property called key to uniquely identify them
We need keys when the siblings are exactly the same


# Can we use Index as keys i React?
noKeys<<<<<<index<<uniqiue keys

# What is props in react?
Props are just the pararmetes paased to the functional compoennts, they are used to flood the data into the react component

# What is a config driven ui?
The api controils what has to be rendered on the UI.