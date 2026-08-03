from setuptools import setup, find_packages

setup(
    name="accountability_ui",
    version="2.0.0",
    long_description="Data Accountability UI",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    python_requires=">=3.12",
    install_requires=[
        "pyyaml"
    ],
)
