"""
Add deleted flag to asset_references - stub migration.

Revision ID: 0005_add_deleted_flag
Revises: 0004_add_duration_to_asset_references
Create Date: 2026-05-15
"""

from alembic import op

revision = "0005_add_deleted_flag"
down_revision = "0004_add_duration_to_asset_references"
branch_labels = None
depends_on = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass