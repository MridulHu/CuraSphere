import streamlit as st
from src.bot import GraphState, ocr, report, generate_summary, anamoly_detection, value_extractor, root_cause, root_cause_1
from src.workflow import graph_workflow
import tempfile
import os

st.title("Medical Report Analyzer")

# File Uploader
uploaded_file = st.file_uploader("Upload an image of the medical report", type=["jpg", "jpeg", "png", "pdf"])

if uploaded_file is not None:
    # Save the uploaded file to a temporary location
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(uploaded_file.read())
        temp_file_path = temp_file.name

    # Prepare the inputs for the workflow
    inputs = {"path": temp_file_path}

    # Initialize the workflow
    app = graph_workflow()

    # Process the inputs through the workflow
    for output in app.stream(inputs):
        for key, value in output.items():
            # st.write(f"Node '{key}': {value}")
            if key == "generate_summary_node":
                st.write(value['summary'])
            if key == "value_extractor_node":
                st.write(value['anamoly'])
            if key == "root_cause_node":
                st.write(value['root_cause'])
            
    # Cleanup the temporary file
    os.remove(temp_file_path)
else:
    st.write("Please upload an image file to start the analysis.")
