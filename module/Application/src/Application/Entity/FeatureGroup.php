<?php
namespace Application\Entity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\Table(name="tx_prompc_domain_model_featuregroup")
 */

class FeatureGroup extends Model
{
    /**
     * @ORM\Column(type="string")
     */
    protected $title;

    /**
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="children")
     * @ORM\JoinColumn(name="pid", referencedColumnName="uid")
     */
    protected $category;

}
