from diagrams import Cluster, Diagram
from diagrams.custom import Custom
from diagrams.onprem.database import MongoDB

with Diagram("Helm Architect Architecture", show=False):

    with Cluster("User Interface"):
        ui = Custom("SvelteKit App", "../icons/svelte.png")

    with Cluster("Backend/API Layer"):
        golang_service = Custom("GoLang Service", "../icons/golang.png")
        pocketbase = Custom("Pocketbase", "../icons/pocketbase.png")
        
    with Cluster("Data Storage Layer"):
        mongo = MongoDB("MongoDB")


    ui >> golang_service
    ui >> pocketbase
    golang_service >> mongo
