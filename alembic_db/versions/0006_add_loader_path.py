"""
Add loader_path to asset_references - stub migration.

Revision ID: 0006_add_loader_path
Revises: 0005_add_deleted_flag
Create Date: 2026-06-01
"""

from alembic import op

revision = "0006_add_loader_path"
down_revision = "0005_add_deleted_flag"
branch_labels = None
depends_on = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass