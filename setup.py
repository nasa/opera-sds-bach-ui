from __future__ import unicode_literals
from __future__ import print_function
from __future__ import division
from __future__ import absolute_import
from setuptools import setup, find_packages

setup(
    name="accountability_ui",
    version="2.0.0",
    long_description="Data Accountability UI",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        "pyyaml"
    ],
)
