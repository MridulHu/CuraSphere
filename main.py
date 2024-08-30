from src.bot import GraphState, ocr, report, generate_summary, anamoly_detection, value_extractor, root_cause, root_cause_1
from src.workflow import graph_workflow
import tempfile
import os

app = graph_workflow()

    # Process the inputs through the workflow
for output in app.stream(inputs):
    for key, value in output.items():
        # st.write(f"Node '{key}': {value}")
        if key == "generate_summary_node":
            (value['summary'])
        if key == "value_extractor_node":
            (value['anamoly'])
        if key == "root_cause_node":
            (value['root_cause'])
        if key == "root_cause_1_node":
            (value['root_cause_1'])
        if key == "Translation_node":
            (value['translation'])
            